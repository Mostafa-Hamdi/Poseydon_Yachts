import React from 'react'

const YachtDetails = (props) => {
  return (
    <div className='yacht-details'>
        <div className="container">
            <div className="box1">
                <h3>Specification</h3>
                <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Brand</td>
                            <td>{props.brand}</td>
                        </tr>
                        <tr>
                            <td>Size</td>
                            <td>{props.size}</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
            <div className="box2">
                <h3>On board</h3>
                <div>
                <ul className='features'>
                    <li>{props.feat1}</li>
                    <li>{props.feat2}</li>
                    <li>{props.feat3}</li>
                    <li>{props.feat4}</li>
                    <li>{props.feat5}</li>
                    <li>{props.feat6}</li>
                    <li>{props.feat7}</li>
                    <li>{props.feat8}</li>
                </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default YachtDetails