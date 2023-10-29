import { useEffect, useState } from "react";
import itemService, { Item } from "../service/item-service";

const useCustomers = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const data = await itemService.getAll();
                setItems(data);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);
    return { items, error, isLoading, setItems, setError };
};

export default useCustomers;
