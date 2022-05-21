package models

import "time"

type WritableModel struct {
	ID int32 `gorm:"primaryKey;autoIncrement:true"`
	// declaring struct variable
	CreatedAt time.Time `gorm:"not null"`
	UpdatedAt time.Time `gorm:"not null"`
	Deleted   bool      `gorm:"not null"`
}
