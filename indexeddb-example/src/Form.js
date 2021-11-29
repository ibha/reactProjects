import React, { useEffect, useState } from 'react'
import { Offline, Online } from 'react-detect-offline'

const formStyle = { padding: '2rem 0rem' }
const inputStyle = { margin: '1rem 0rem' }

const Form = ({ db }) => {
    const [names, setNames] = useState({ firstname: '', lastname: '' })

    useEffect(
        () => {
          // create the store
          db.version(1).stores({ formData: 'id,value' })
            // perform a read/write transatiction on the new store
    db.transaction('rw', db.formData, async () => {
        // get the first and last name from the data
        const dbFirstname = await db.formData.get('firstname')
        const dbLastname = await db.formData.get('lastname')
  
        // if the first or last name fields have not be added, add them
        if (!dbFirstname) await db.formData.add({ id: 'firstname', value: '' })
        if (!dbLastname) await db.formData.add({ id: 'lastname', value: '' })
  
        // set the initial values
        setNames({
          firstname: dbFirstname ? dbFirstname.value : '',
          lastname: dbLastname ? dbLastname.value : ''
        })
      }).catch(e => {
        // log any errors
        console.log(e.stack || e)
      })
  
      // close the database connection if form is unmounted or the
      // database connection changes
      return () => db.close()
        },
        // run effect whenever the database connection changes
        [db]
      )

      const handleSubmit = e => {
        e.preventDefault()
        setName('firstname')('')
        setName('lastname')('')
      }

      
    const setName = (id,value) => {
        console.log(db);
        db.formData.put( {id,value} )
        setNames(prevVal => ({...prevVal, [id]:value}))
    }
    const handleSetName = (id,event) => {
        setName(id,event.target.value);

    }

    const clearDB = (event) => {
        event.preventDefault();
        db.delete();
    }

    return(
        <form style={formStyle} onSubmit={handleSubmit}>
        <span>First name:</span>
        <br />
        <input
          style={inputStyle}
          type="text"
          name="firstname"
          value={names.firstname}
          onChange={e=>handleSetName('firstname',e)}
        />
        <br />
        <span>Last name:</span>
        <br />
        <input
          style={inputStyle}
          type="text"
          name="lastname"
          value={names.lastname}
          onChange={e=>handleSetName('lastname',e)}
        />
        <br />
        {/* Handle whether or not the user is offline */}
        <Online>
          <input type="submit" value="Submit" />
          <button onClick={(e)=>clearDB(e)}>Clear</button>
        </Online>
        <Offline>You are currently offline!</Offline>
      </form>
    );
}

export default Form;