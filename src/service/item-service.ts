import create, { HttpService } from "./http-service";

export interface Item {
    code: string;
    description: string;
    unitPrice: number;
    qtyOnHand: number;
}

export class ItemService {
    private readonly apiClient: HttpService;

    constructor() {
        this.apiClient = create("/items");
    }

    create(item: Item) {
        this.apiClient.create(item).then((r) => {
            if (r.status !== 201) {
                throw Error("creating error");
            }
        });
    }

    delete(id: string) {
        this.apiClient.delete(id).then((res) => {
            if (res.status !== 204) {
                throw Error("delete error");
            }
        });
    }

    update(id: string, item: Item) {
        this.apiClient.update(id, item).then((res) => {
            console.log(res);
            if (res.status === 204) {
                throw Error("update error");
            }
        });
    }

    async getAll(): Promise<Item[]> {
        try {
            const { request } = this.apiClient.getAll<Item>();
            const res = await request;
            console.log(res);

            return res.data.data;
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
    }
}

export default new ItemService();
