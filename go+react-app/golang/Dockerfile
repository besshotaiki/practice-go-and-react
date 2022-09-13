# Dockerfile-golang
FROM golang:1.16
 
WORKDIR /app
 
COPY go-app/go.mod .
COPY go-app/go.sum .
 
# airの設定ファイルをコピー
COPY go-app/*air.toml .
 
RUN go mod download
 
COPY ./go-app .
 
RUN curl -sSfL https://raw.githubusercontent.com/cosmtrek/air/master/install.sh | sh -s -- -b $(go env GOPATH)/bin
 
CMD ["air"]