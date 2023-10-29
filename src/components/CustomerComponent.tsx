import { useRef } from "react";
import useCustomers from "../hook/use-customer.ts";
import customerService, { Customer } from "../service/customer-service";

const CustomerComponent = () => {
    const idRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);
    const { customers, setCustomers } = useCustomers();

    const handleAddOnClick = () => {
        const customer: Customer = {
            id: idRef.current!.value,
            name: nameRef.current!.value,
            address: addressRef.current!.value,
        };
        customerService.create(customer);
        setCustomers([...customers, customer]);
    };

    const deleteCustomer = (id: string) => {
        customerService.delete(id);
        const updatedCustomers = customers.filter(
            (customer) => customer.id !== id
        );
        setCustomers(updatedCustomers);
    };

    const handleUpdateOnClick = () => {
        const customer: Customer = {
            id: idRef.current!.value,
            name: nameRef.current!.value,
            address: addressRef.current!.value,
        };

        customerService.update(customer.id, customer);
        const updatedCustomers = customers.map((customer) => {
            return customer.id === customer.id
                ? {
                      ...customer,
                      name: customer.name,
                      address: customer.address,
                  }
                : customer;
        });
        setCustomers(updatedCustomers);
    };

    const trOnClick = (id: string) => {
        const customer = customers.find((c) => c.id === id);
        if (!customer) {
            alert("null");
            return;
        }
        idRef.current!.value = customer.id;
        nameRef.current!.value = customer.name;
        addressRef.current!.value = customer.address;
    };

    return (
        <>
            <form
                className="row g-3 customer-form"
                onSubmit={(e) => e.preventDefault()}
            >
                <h1>Customers</h1>
                <div className="col-lg-3 col-12 col-md-6 col-sm-12">
                    <label htmlFor="customer_id" className="form-label">
                        Customer Id
                    </label>
                    <input
                        ref={idRef}
                        type="text"
                        className="form-control fields"
                        placeholder="C001"
                    />
                </div>
                <div className=" col-lg-3 col-12 col-md-6 col-sm-12">
                    <label htmlFor="customer_name" className="form-label">
                        Name
                    </label>
                    <input
                        ref={nameRef}
                        type="text"
                        className="form-control fields"
                        placeholder="Dilshan"
                    />
                </div>
                <div className="col-md-12 col-lg-6 col-sm-12">
                    <label htmlFor="customer_address" className="form-label">
                        Address
                    </label>
                    <input
                        ref={addressRef}
                        type="text"
                        className="form-control fields"
                        placeholder="1234 Main St"
                    />
                </div>

                <div className="col-12 button-section">
                    <button
                        type="submit"
                        className="btn btn-success"
                        onClick={handleAddOnClick}
                    >
                        Add
                    </button>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleUpdateOnClick}
                    >
                        Update
                    </button>
                </div>
                <div className="col-md-6 col-sm-12 col-lg-4">
                    <label htmlFor="search" className="form-label">
                        Search
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="search id or name..."
                    />
                </div>
            </form>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Option</th>
                    </tr>
                </thead>
                <tbody id="customerTbl">
                    {customers.map((customer, index) => (
                        <tr key={index} onClick={() => trOnClick(customer.id)}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.address}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteCustomer(customer.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default CustomerComponent;
