import { useEffect, useState } from "react";
import customerService, { Customer } from "../service/customer-service";

const useCustomers = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const data = await customerService.getAll();
                setCustomers(data);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);
    return { customers, error, isLoading, setCustomers, setError };
};

export default useCustomers;
