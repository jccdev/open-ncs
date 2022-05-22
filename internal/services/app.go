package services

import (
	"jcc.dev/open-ncs/internal/data_access"
	"jcc.dev/open-ncs/internal/types/models"
)

func GetApp(id int32) (models.App, error) {
	var app models.App
	db, err := data_access.GetDb()
	if err != nil {
		return app, err
	}
	result := db.First(&app, id)
	if result.Error != nil {
		return app, result.Error
	}
	return app, err
}

func GetApps() ([]models.App, error) {
	var apps []models.App
	db, err := data_access.GetDb()
	if err != nil {
		return apps, err
	}
	db.Where("Deleted = ?", false).Limit(10).Find(&apps)
	return apps, err
}

func CreateApp(app *models.App) error {
	db, err := data_access.GetDb()
	if err != nil {
		return err
	}

	WritableOnCreate(&app.WritableModel)

	result := db.Create(&app)
	if result.Error != nil {
		return result.Error
	}

	return nil
}

func UpdateApp(id int32, updated models.App) (models.App, error) {
	var forUpdate models.App
	db, err := data_access.GetDb()
	if err != nil {
		return forUpdate, err
	}

	findResult := db.First(&forUpdate, id)
	if findResult.Error != nil {
		return forUpdate, findResult.Error
	}

	forUpdate.Name = updated.Name
	forUpdate.Definition = updated.Definition
	WritableOnUpdate(&forUpdate.WritableModel)

	saveResult := db.Save(&forUpdate)
	if saveResult.Error != nil {
		return forUpdate, saveResult.Error
	}

	return forUpdate, nil
}

func DeleteApp(appId int32) (models.App, error) {
	var app models.App
	db, err := data_access.GetDb()
	if err != nil {
		return app, err
	}

	findResult := db.Find(&app, appId)
	if findResult.Error != nil {
		return app, findResult.Error
	}

	WritableOnDelete(&app.WritableModel)

	result := db.Updates(app)

	if result.Error != nil {
		return app, result.Error
	}

	return app, nil
}
