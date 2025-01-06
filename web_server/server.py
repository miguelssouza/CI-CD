import http.server
import socketserver
import logging

logging.basicConfig(level=logging.INFO)
logging.getLogger().addHandler(logging.StreamHandler())

PORT = 8000

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    """
    httpd.serve_forever() is a blocking call that runs the http server.
    """
    logging.info(f"Running the server at port {PORT}")
    httpd.serve_forever()
