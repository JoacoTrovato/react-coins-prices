import React from 'react';
import CoinRow from './CoinRow';

const titles = ['#', 'Coin', 'Price', 'Price Change', '24hs Volume'];

const TableCoins = ({ coins, search }) => {
    console.log(coins);
    console.log(search);
    const filteredCoins = coins.filter((coin) => 
        coin.name.toLowerCase().includes(search) |
        coin.symbol.toLowerCase().includes(search)
    );

    return(
        <table className='table table-dark mt-4 table-hover'>
            <thead>
                <tr>
                    {titles.map((title, index) => (
                        <td key={index}>{title}</td>
                    ))}
                </tr>
            </thead>
            <tbody>
                {filteredCoins.map((coin, index) => (
                    <CoinRow coin={coin} key={index} index={index + 1} />
                ))}
            </tbody>
        </table>
    )
};

export default TableCoins;