FROM scratch

ADD ./dist /dist/
COPY Caddyfile /
COPY caddy-linux /

EXPOSE 8000
ENTRYPOINT ["/caddy-linux"]
