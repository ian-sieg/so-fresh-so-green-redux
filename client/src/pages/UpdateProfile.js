import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from '@apollo/client';
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from 'react-router-dom';
import { UPDATE_USER } from "../utils/mutations";
import { QUERY_USER_UPDATE } from "../utils/queries";
import Auth from '../utils/auth'

export default function UpdateProfile() {
  
  const [image, setImage] = useState();
  const profData = Auth.getProfile()
  const userId = profData.data._id
  const userName = profData.data.username
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onPreviewImage = (e) => {
    if(e.target.name === "picture") {
      var file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        if(reader.readyState === 2) {
          setImage(reader.result)
        }
      }
      reader.readAsDataURL(file);
    }
  }
  const onSubmit = async (data, e) => {
    // await singleUploadApi(data);
    console.log('nice')
    updateReroute();
  }

  //ians code for rest of update
  const {id} = useParams()
  const history = useNavigate()
  const updateReroute = () => {
    history(`/profile/${id}`)
  }

  const {loading, data} = useQuery(QUERY_USER_UPDATE, {variables: {_id: id}})
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    location: '',
    bio: ''
  })

  const [updateUser] = useMutation(UPDATE_USER, {
      update(cache, {data: {updateUser}}) {
          try {
              const {getUser} = cache.readQuery({
                  query: QUERY_USER_UPDATE,
                  variables: {_id: id}
              })

              cache.writeQuery({
                  query: QUERY_USER_UPDATE,
                  variables: {_id: id},
                  data: {getUser: [updateUser, getUser]}
              })
              updateReroute()
          } catch (err) {
              console.error(err)
          }
      }
  })

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    try {
        const {data} = await updateUser({
            variables: {...formState}
        })
        setFormState({
            username: '',
            email: '',
            location: '',
            bio: ''
        })
    } catch (err) {
        console.error(err)
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormState({...formState, [name]: value})
  }
        
    return (

<>
      <div>
      <div>
                      Update Profile
                    </div>
                <div>
                    <div>
                        <form onSubmit={handleFormSubmit}>
                        <div>Name</div>
                        <div>
            <input name='username' placeholder={`${data?.getUser.username}`} value={formState.username} onChange={handleChange} />
        </div>
        <div>Email</div>
        <div>
            <input name='email' placeholder={`${data?.getUser.email}`} value={formState.email} onChange={handleChange} />
        </div>
        <div>Location</div>
        <div>
            <input name='location' placeholder={`${data?.getUser.location}`} value={formState.location} onChange={handleChange} />
        </div>
        <div>Bio</div>
        <div>
            <textarea name='bio' placeholder={`${data?.getUser.bio}`} value={formState.bio} onChange={handleChange}></textarea>
        </div>
                            <div>
                                <button type='submit'>Submit Updates</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="image">Update your profile picture:</label>
          <div>
            <input
              name="image"
              type="file"
              id="image"
              {...register("picture")}
              onChange={onPreviewImage}
            />
          </div>
        </div>
        <br></br>
        <div>
          <button type="submit">Upload Photo</button>
        </div>
        <br></br>
      </form>
            </div>
    </>
    )
}