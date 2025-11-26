import re
import os

file_path = 'risk_map_interactive.html'
file_size = os.path.getsize(file_path)
print(f"File size: {file_size / (1024*1024):.2f} MB")

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

print(f"Content length: {len(content)}")

# Look for large script tags
script_pattern = re.compile(r'<script>(.*?)</script>', re.DOTALL)
scripts = script_pattern.findall(content)

print(f"Found {len(scripts)} script tags")

for i, script in enumerate(scripts):
    size = len(script)
    if size > 10000:
        print(f"Script {i} size: {size / (1024*1024):.2f} MB")
        # Peek at start of script
        print(f"Start: {script[:100]}...")
