package services

import (
	"jcc.dev/open-ncs/internal/types/models"
	"time"
)

func WritableOnCreate(model *models.WritableModel) {
	model.ID = 0
	timestamp := time.Now().UTC()
	model.CreatedAt = timestamp
	model.UpdatedAt = timestamp
	model.Deleted = false
}

func WritableOnUpdate(model *models.WritableModel) {
	model.UpdatedAt = time.Now().UTC()
}

func WritableOnDelete(model *models.WritableModel) {
	model.UpdatedAt = time.Now().UTC()
	model.Deleted = true
}
