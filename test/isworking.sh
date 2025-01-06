#!bin/bash

STATUS_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:8000)

if [ $STATUS_CODE -eq 200 ]; then
    echo "OK"
else
    exit 1
