import create, { HttpService } from "./http-service";

export interface Customer {
    id: string;
    name: string;
    address: string;
}

export class CustomerService {
    private readonly apiClient: HttpService;

    constructor() {
        this.apiClient = create("/customers");
    }

    create(customer: Customer) {
        this.apiClient.create(customer).then((r) => {
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

    update(id: string, customer: Customer) {
        this.apiClient.update(id, customer).then((res) => {
            console.log(res);
            if (res.status === 204) {
                throw Error("update error");
            }
        });
    }

    async getAll(): Promise<Customer[]> {
        try {
            console.log(this.apiClient);
            const { request } = this.apiClient.getAll<Customer>();
            const res = await request;
            return res.data.data;
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
    }
}

export default new CustomerService();
