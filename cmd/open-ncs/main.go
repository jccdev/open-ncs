package main

import (
	"fmt"
	"github.com/julienschmidt/httprouter"
	"jcc.dev/open-ncs/internal/routes"
	"log"
	"net/http"
)

func Ping(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	fmt.Fprint(w, "pong")
}

func main() {
	router := httprouter.New()
	router.GET("/ping", Ping)
	router.GET("/apps/:id", routes.GetApp)
	router.GET("/apps", routes.GetApps)
	router.POST("/apps", routes.PostApp)
	router.PUT("/apps/:id", routes.PutApp)
	router.DELETE("/apps/:id", routes.DeleteApp)

	log.Fatal(http.ListenAndServe(":8080", router))
}
