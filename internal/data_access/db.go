package data_access

import (
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"os"
)

var db *gorm.DB

func GetDb() (*gorm.DB, error) {
	if db == nil {
		dsn := os.Getenv("OPEN_NCS_DB")
		var err error
		db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
		if err != nil {
			return db, err
		}
	}
	return db, nil
}
