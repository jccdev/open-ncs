package models

import (
	"database/sql/driver"
	"encoding/json"
)

type App struct {
	WritableModel
	Name       string
	Definition AppDefinition `sql:"type:jsonb"`
}

type AppDefinition struct {
	Owner string
}

func (j AppDefinition) Value() (driver.Value, error) {
	valueString, err := json.Marshal(j)
	return string(valueString), err
}

func (j *AppDefinition) Scan(value interface{}) error {
	if err := json.Unmarshal(value.([]byte), &j); err != nil {
		return err
	}
	return nil
}
