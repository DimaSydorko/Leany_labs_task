import './search.css'
import React from 'react'
import { Field, Form, Formik } from 'formik'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { search } from '../redux/location-redser'

const SearchField = React.memo(({search}) => {
  return <>
    <Formik
      initialValues={{searchLocationByIp: ''}}
      onSubmit={formData => {
        search(formData.searchLocationByIp)
      }}
    >
      {({handleSubmit, handleChange}) => (
        <Form onSubmit={handleSubmit}>
          <Field
            type={'search'}
            name={'searchLocationByIp'}
            placeholder={'8.8.8.8'}
            autoComplete={"off"}
            onChange={handleChange}
          />
          <button type='submit'>Search</button>
        </Form>
      )}
    </Formik>
  </>
})

const mapStateToProps = (state) => ({
  search: state.search
})

export default compose (
  connect(mapStateToProps, {search}) 
)(SearchField)