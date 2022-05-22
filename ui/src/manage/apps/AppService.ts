import axios from 'axios';
import { App } from './Types';
import { UrlService } from '../../common/services/UrlService';

export class AppService {
	static async GetAll() {
		const url = UrlService.baseUrl() + '/apps';
		const res = await axios.get<App[]>(url);
		return res.data;
	}

	static async Get(id: number) {
		const url = UrlService.baseUrl() + `/apps/${id}`;
		const res = await axios.get<App>(url);
		return res.data;
	}

	static async Create(app: App) {
		const url = UrlService.baseUrl() + `/apps`;
		const res = await axios.post<App>(url, app);
		return res.data;
	}

	static async Update(app: App) {
		const url = UrlService.baseUrl() + `/apps/${app.ID}`;
		const res = await axios.put<App>(url, app);
		return res.data;
	}

	static async Delete(id: number) {
		const url = UrlService.baseUrl() + `/apps/${id}`;
		await axios.delete(url);
	}
}
