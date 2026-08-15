#!/bin/bash
# build-translation.sh <lang> <localName> <slug> "<TITLE>" "<DESCRIPTION>"
#
# Assembles translation/lesson/<lang>/<slug>.md from a hand-written body at
# <scratchpad>/<lang>-<slug>.body.md, reusing translate-content.js's own
# parser/renderer so the frontmatter, ASCII banner and spacing are exact,
# then runs the structural + length verifier.
#
# Source bodies stay plain-space; language typography (French NBSP etc.) is
# applied to a temp copy at assembly time, so hand-edits to the source always
# match what was typed.
set -e
LANG_CODE="$1"; LOCAL_NAME="$2"; SLUG="$3"; TITLE="$4"; DESC="$5"
D=${TRANSLATION_SCRATCH:-.translation-drafts}
BODY="$D/$LANG_CODE-$SLUG.body.md"
TMP="$D/.$LANG_CODE-$SLUG.typo.md"
if [ ! -f "$BODY" ]; then echo "missing body file: $BODY" >&2; exit 1; fi
node -e "
import('./content-lib.js').then(({applyTypography})=>{
  const fs=require('fs');
  fs.writeFileSync('$TMP', applyTypography(fs.readFileSync('$BODY','utf8'),'$LANG_CODE'));
});"
node assemble-translation.js "$SLUG" "$LANG_CODE" "$TMP" "$TITLE" "$DESC" "$LOCAL_NAME"
node translate-content.js --lang "$LANG_CODE" --slug "$SLUG" --verify-only
