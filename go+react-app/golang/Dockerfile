# Dockerfile-golang
FROM golang:1.16

ENV PROJECT /go-app

WORKDIR ${PROJECT}
 
COPY ${PROJECT}/go.mod .
COPY ${PROJECT}/go.sum .
 
# airの設定ファイルをコピー
COPY ${PROJECT}/*air.toml .
 
RUN go mod download
 
COPY .${PROJECT} .
 
RUN curl -sSfL https://raw.githubusercontent.com/cosmtrek/air/master/install.sh | sh -s -- -b $(go env GOPATH)/bin

WORKDIR ${PROJECT}/cmd/api
CMD ["air"]