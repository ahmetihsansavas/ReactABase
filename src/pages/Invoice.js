import React from 'react';
import { Button } from 'primereact/button';

const Invoice = (props) => {
    const print = () => {
        window.print();
    };

    return (
        <div className="layout-invoice-page">
            <Button type="button" label="Print" icon="pi pi-print" onClick={print} style={{ display: 'block', marginBottom: '20px', marginLeft: '6px' }} className="p-button-outlined invoice-button"></Button>
            <div className="grid">
                <div className="col">
                    <div className="card">
                        <div id="invoice-content">
                            <div className="invoice">
                                <div className="invoice-header">
                                    <div className="invoice-company flex align-items-center">
                                        <img className="invoice-logo" src={`assets/layout/images/logo-${props.colorMode === 'light' ? 'dark' : 'light'}.png`} alt="atlantis-layout" />
                                        <img className="invoice-appname" src={`assets/layout/images/appname-${props.colorMode === 'light' ? 'dark' : 'light'}.png`} alt="atlantis-layout" />
                                    </div>
                                    <div className="ml-2">
                                        <div className="customer-id">Customer ID: C1613</div>
                                        <div className="invoice-address">9137 3rd Lane California City CA 93504, U.S.A.</div>
                                    </div>
                                </div>

                                <div className="invoice-to">
                                    <div className="invoice-date">29 January, 2021</div>
                                    <div className="invoice-id">
                                        Invoice <span>#00002</span>
                                    </div>
                                    <div className="invoice-to-name">Customer Firm name</div>
                                    <div className="invoice-to-info">
                                        <div>Claire Williams, 148 Hope Lane</div>
                                        <div>Palo Alto, CA 94304. </div>
                                    </div>
                                </div>

                                <div className="invoice-items">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Description</th>
                                                <th>Quantity</th>
                                                <th>Unit Price</th>
                                                <th>Line Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Green T-Shirt</td>
                                                <td>1</td>
                                                <td>$49.00</td>
                                                <td>$49.00</td>
                                            </tr>
                                            <tr>
                                                <td>Game Controller</td>
                                                <td>2</td>
                                                <td>$99.00</td>
                                                <td>$198.00</td>
                                            </tr>
                                            <tr>
                                                <td>Mini Speakers</td>
                                                <td>1</td>
                                                <td>$85.00</td>
                                                <td>$85.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="invoice-summary">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Sub total:</td>
                                                <td>$232,00</td>
                                            </tr>
                                            <tr>
                                                <td>Vat:</td>
                                                <td>$00,00</td>
                                            </tr>
                                            <tr>
                                                <td>Total:</td>
                                                <td>$232,00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="invoice-notes">
                                    <div>Note: </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname && prevProps.colorMode === nextProps.colorMode;
};

export default React.memo(Invoice, comparisonFn);
