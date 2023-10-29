import { useRef } from "react";
import useItems from "../hook/use-items";
import itemService, { Item } from "../service/item-service";

const ItemComponent = () => {
    const { items, setItems } = useItems();
    const codeRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);
    const unitPriceRef = useRef<HTMLInputElement>(null);
    const qtyOnHandRef = useRef<HTMLInputElement>(null);

    function handleAddOnClick(): void {
        const item: Item = {
            code: codeRef.current!.value,
            description: codeRef.current!.value,
            unitPrice: parseFloat(unitPriceRef.current!.value),
            qtyOnHand: parseInt(qtyOnHandRef.current!.value),
        };
        console.log(item);
        itemService.create(item);
        setItems([...items, item]);
    }

    return (
        <>
            <form
                className="row g-3 items-form"
                onSubmit={(e) => e.preventDefault()}
            >
                <h1 className="m-3">Items</h1>
                <div className="col-lg-3 col-12 col-md-6 col-sm-12">
                    <label htmlFor="item_code" className="form-label">
                        Item code
                    </label>
                    <input
                        type="text"
                        className="form-control itemfields"
                        placeholder="P001"
                        ref={codeRef}
                    />
                </div>
                <div className=" col-lg-3 col-12 col-md-6 col-sm-12">
                    <label htmlFor="item_description" className="form-label">
                        description
                    </label>
                    <input
                        type="text"
                        className="form-control itemfields"
                        placeholder="White Rice"
                        ref={descriptionRef}
                    />
                </div>
                <div className="col-lg-3 col-12 col-md-6 col-sm-12">
                    <label htmlFor="item_price" className="form-label">
                        Price
                    </label>
                    <input
                        type="text"
                        className="form-control itemfields"
                        placeholder="200.00"
                        ref={unitPriceRef}
                    />
                </div>
                <div className="col-lg-3 col-12 col-md-6 col-sm-12">
                    <label htmlFor="item_qty" className="form-label">
                        Quantity
                    </label>
                    <input
                        type="text"
                        className="form-control itemfields"
                        placeholder="20"
                        ref={qtyOnHandRef}
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
                    <button type="submit" className="btn btn-primary">
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
                        placeholder="Search code or description..."
                    />
                </div>
            </form>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Code</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Option</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td>{item.code}</td>
                            <td>{item.description}</td>
                            <td>{item.unitPrice}</td>
                            <td>{item.qtyOnHand}</td>
                            <td>
                                <button className="btn btn-danger">
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
export default ItemComponent;
