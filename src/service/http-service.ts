import apiClient from "./api-client";

export interface StandardResponse<T> {
    code: bigint;
    msg: string;
    data: T;
}

export class HttpService {
    private endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll<T>() {
        const controller = new AbortController();
        const request = apiClient.get<StandardResponse<T[]>>(this.endpoint, {
            signal: controller.signal,
        });
        return { request, cancel: () => controller.abort() };
    }

    get<T>(id: string) {
        const controller = new AbortController();
        const request = apiClient.get<StandardResponse<T>>(
            this.endpoint + "/" + id,
            {
                signal: controller.signal,
            }
        );
        return { request, cancel: () => controller.abort() };
    }

    delete(id: string) {
        return apiClient.delete(this.endpoint + "/" + id);
    }

    update<T>(id: string, entity: T) {
        return apiClient.patch(this.endpoint + "/" + id, entity);
    }

    create<T>(entity: T) {
        return apiClient.post(this.endpoint, entity);
    }
}

const create = (endpoint: string) => new HttpService(endpoint);
export default create;
