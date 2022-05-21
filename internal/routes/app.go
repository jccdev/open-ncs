package routes

import (
	"encoding/json"
	"github.com/julienschmidt/httprouter"
	"jcc.dev/open-ncs/internal/services"
	"jcc.dev/open-ncs/internal/types/models"
	"net/http"
	"strconv"
)

func getId32Param(ps httprouter.Params) (int32, error) {
	var id int32
	idParam := ps.ByName("id")

	id64, err := strconv.ParseInt(idParam, 10, 32)
	if err != nil {
		return id, err
	}

	id = int32(id64)
	return id, nil
}

func GetApp(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	id, err := getId32Param(ps)
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}

	app, err := services.GetApp(id)
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(app)
}

func GetApps(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	apps, err := services.GetApps()
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(apps)
}

func PostApp(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	var app models.App
	err := json.NewDecoder(r.Body).Decode(&app)

	services.CreateApp(&app)

	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(app)
}

func PutApp(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	id, err := getId32Param(ps)
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}

	var updated models.App
	err = json.NewDecoder(r.Body).Decode(&updated)
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}

	var app models.App
	app, err = services.UpdateApp(id, updated)
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(app)
}

func DeleteApp(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	id, err := getId32Param(ps)
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}

	app, err := services.DeleteApp(id)
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(app)
}
