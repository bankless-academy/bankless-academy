module.exports = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          "source": "/:path*",
          "has": [
            {
              "type": "host",
              "value": "whitelabel.banklessacademy.com"
            }
          ],
          "destination": "/notion/:path*"
        },
        {
          "source": "/:path*",
          "has": [
            {
              "type": "host",
              "value": "documentation.banklessacademy.com"
            }
          ],
          "destination": "/notion/:path*"
        },
        {
          "source": "/:path*",
          "has": [
            {
              "type": "host",
              "value": "talent.banklessacademy.com"
            }
          ],
          "destination": "/notion/:path*"
        },
        {
          "source": "/:path*",
          "has": [
            {
              "type": "host",
              "value": "sponsors.banklessacademy.com"
            }
          ],
          "destination": "/notion/:path*"
        }
      ]
    }
  }
}
