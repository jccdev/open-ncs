export interface App {
	ID: number;
	Name: string;
	Definition: AppDefinition;
	CreatedAt: string;
	UpdatedAt: string;
	Deleted: boolean;
}

export interface AppDefinition {
	Owner: string;
}
