echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker push jsboilerplates/web-vuejs
docker push jsboilerplates/web-vuejs:0.1.0
