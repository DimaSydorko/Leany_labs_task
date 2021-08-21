import './aboutLocation.css'
import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import stringImg from '../img/string.png'
import numberImg from '../img/number.png'
import booleanImg from '../img/boolean.png'

const AboutLocation = React.memo(({geolocation}) => {
  function DataSort(data) {
    switch (typeof data) {
      case 'string': 
        return <div className='string'><img src={stringImg} alt={'string'}/>{data}</div>
      case 'number': 
        return <div className='number'><img src={numberImg} alt={'string'}/>{data}</div>
      case 'boolean': 
        return <div className='boolean'><img src={booleanImg} alt={'string'}/>{data.toString()}</div>
      default: 
        return <div className='outher'>Unsupported type of data</div>
    }
  }

  function Output() {
    if (geolocation.isFetching) return "Loading..."
    else if (geolocation.error) return geolocation.error
    else if (geolocation.locationData) return Object.keys(geolocation.locationData)
      .map((key, i)=>(
        <li key={i}>
          {key}: {DataSort(geolocation.locationData[key])}
        </li>
      ))
    else return 'Enter IP and press "Search" to get geplocation data'
  }

  return <>
    <div className='Output'>
      {Output()}
    </div>
  </>
})

const mapStateToProps = (state) => ({
  geolocation: state.geolocation
})

export default compose (
  connect(mapStateToProps, null) 
)(AboutLocation)