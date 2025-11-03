
curl -X POST "https://api.clarifai.com/v2/users/clarifai/apps/main/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs" \
    -H "Authorization: Key db12da782f4142eaa9e5a804969c69c2" \
    -H "Content-Type: application/json" \
    -d '{
      "inputs": [
        {
          "data": {
            "image": {
              "url": "https://samples.clarifai.com/metro-north.jpg"
            }
          }
        }
      ]
    }'
