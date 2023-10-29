const Home = () => {
    return (
        <div id="home">
            <h1 id="abc" className="pos">
                ABC POS System
            </h1>
            <h4 className="content">
                Orders :{" "}
                <span id="ordersCount" className="orders">
                    20
                </span>
            </h4>
            <h4 className="content">
                Customers :{" "}
                <span id="customersCount" className="customers">
                    10
                </span>
            </h4>
        </div>
    );
};

export default Home;
