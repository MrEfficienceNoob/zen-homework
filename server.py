#!/usr/bin/env python3
"""
Simple HTTP Server for Italian Brainrot Clicker
Run this script to serve the game on your local network
"""

import http.server
import socketserver
import socket
import webbrowser
import os
import sys
from pathlib import Path

# Configuration
PORT = 8000
HOST = '0.0.0.0'  # Listen on all interfaces

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers to allow cross-origin requests
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

def get_local_ip():
    """Get the local IP address of this machine"""
    try:
        # Connect to a remote server to get local IP
        with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
            s.connect(("8.8.8.8", 80))
            local_ip = s.getsockname()[0]
        return local_ip
    except Exception:
        return "127.0.0.1"

def main():
    # Change to the directory containing this script
    script_dir = Path(__file__).parent
    os.chdir(script_dir)
    
    # Get local IP address
    local_ip = get_local_ip()
    
    print("🧠 Italian Brainrot Clicker - Local Server")
    print("=" * 50)
    print(f"Starting server on port {PORT}...")
    print(f"Local IP: {local_ip}")
    print()
    
    # Create server
    with socketserver.TCPServer((HOST, PORT), CustomHTTPRequestHandler) as httpd:
        print(f"✅ Server running successfully!")
        print()
        print("🌐 Access your game at:")
        print(f"   Local:    http://localhost:{PORT}")
        print(f"   Network:  http://{local_ip}:{PORT}")
        print()
        print("📱 Mobile devices on the same network can access:")
        print(f"   http://{local_ip}:{PORT}")
        print()
        print("🛑 Press Ctrl+C to stop the server")
        print("=" * 50)
        
        # Try to open the game in browser
        try:
            webbrowser.open(f'http://localhost:{PORT}')
            print("🚀 Opening game in your default browser...")
        except Exception as e:
            print(f"⚠️  Could not open browser automatically: {e}")
            print(f"   Please manually open: http://localhost:{PORT}")
        
        print()
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n🛑 Server stopped by user")
            print("Thanks for playing Italian Brainrot Clicker! 🧠")

if __name__ == "__main__":
    main()
