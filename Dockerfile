FROM ubuntu:latest
LABEL authors="naima"

ENTRYPOINT ["top", "-b"]