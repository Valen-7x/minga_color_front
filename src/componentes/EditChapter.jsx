import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import chapterActions from '../redux/actions/chapterActions';
import axios from 'axios';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';

export default function EditChapter() {
  const { id_manga } = useParams();
  const dispatch = useDispatch();
  const chapterData = useSelector((store) => store.chaptersReducer.chapters);
  const [mangaTitle, setMangaTitle] = useState('');
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [selectedData, setSelectedData] = useState('');
  const [dataValue, setDataValue] = useState('');

  const getManga = async () => {
    try {
      let token = JSON.parse(localStorage.getItem('token'));
      let headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const mangaResponse = await axios.get(`http://localhost:8000/api/mangas/${id_manga}`, headers);
      setMangaTitle(mangaResponse.data.response.title);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getManga();
    dispatch(chapterActions.get_chapters_data(id_manga));
  }, []);

  const chapterProperties = chapterData?.length > 0 ? Object.keys(chapterData[0]).filter(prop => prop !== '_id') : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    
      if (selectedData === "cover_photo") {
        const data={
          id:e.target[1].value,
          [e.target[2].value]: e.target[3].files[0],
        }
        
        console.log([e.target]);
      dispatch(chapterActions.update_chapters_data(data));
      } else {
        // Si no es "cover_photo", enviamos los datos directamente
        const data = {
          id: e.target[1].value,
        [e.target[2].value]: e.target[3].value,
        };
      dispatch(chapterActions.update_chapters_data(data));
      }

      Swal.fire("Success", "You have edited the chapter successfully!", "success");

      setSelectedChapter((prevSelectedChapter) => ({
        ...prevSelectedChapter,
        [e.target[2].value]: e.target[3].value,
      }));
      dispatch(chapterActions.get_chapters_data(id_manga));
    
  };

  const handleChapterSelect = (e) => {
    const selectedChapterId = e.target.value;
    const selectedChapterData = chapterData.find((chapter) => chapter._id === selectedChapterId);
    setSelectedChapter(selectedChapterData);
  };

  const handleDataChange = (e) => {
    setSelectedData(e.target.value);
    setDataValue('');
  };

  const handleClickDelete = async () => {
    if (selectedChapter?._id) {
      try {
        const deletedChapterId = selectedChapter._id;
        await dispatch(chapterActions.delete_chapters_data(deletedChapterId));
        setSelectedChapter(null);
        Swal.fire("Success", "You deleted the chapter successfully!", "success");
        dispatch(chapterActions.get_chapters_data(id_manga));
      } catch (error) {
        console.log("Error deleting chapter:", error);
        Swal.fire("Error", "Oh no! The chapter could not be deleted.", "error");
      }
    } else {
      console.log("Error: No chapter selected for deletion.");
    }
  };
  function verfiedUrl(photo){
    if(photo.startsWith('http')){ //si foto empieza con http entonces devuelve la foto 
      return photo
    }else{
    return `http://localhost:8000/${photo}`
    }
    
  }
  

  return (
    <div className='bg-[black] h-[90vh] flex justify-center items-center'>
      <div id='seccion-izquierda' className='lg:w-[50%] w-[100%]  h-[90vh] flex items-center justify-center'>
        <form className='ml-[7rem]' onSubmit={(e) => handleSubmit(e)}>
          <div className='w-[50%] h-[55vh] flex flex-col justify-around items-center'>
            <div className='flex w-[10rem] justify-center'>
              <p className='text-[white] text-[1.5rem]'>Edit chapter</p>
            </div>
            <label htmlFor='name'>
              <input
                className='border-b-2 border-[gray] bg-[black] text-[white] placeholder:text-[0.7rem] px-[1rem]'
                value={mangaTitle}
                type='text'
                id='name'
                placeholder='Name of the manga'
                disabled
              />
            </label>
            <select
              className='border-b-2 border-[gray] bg-[black] text-[gray] px-[1rem]  w-[13.7rem] text-[0.7rem] py-[0.2rem]'
              placeholder='Select chapter'
              name=''
              id='select'
              value={selectedChapter?._id}
              onChange={handleChapterSelect}
            >
              <option value=''>Select chapter</option>
              {chapterData?.map((chapter) => (
                <option key={chapter._id} value={chapter._id}>
                  {chapter.title}
                </option>
              ))}
            </select>

            <select
              className='border-b-2 border-[gray] bg-[black] text-[gray] px-[1rem] w-[13.7rem] text-[0.7rem] py-[0.2rem]'
              placeholder='Select data'
              name=''
              id='selectData'
              value={selectedData}
              onChange={handleDataChange}
            >
              <option value=''>Select data</option>
              {chapterProperties.map((property) => (
                <option key={property} value={property}>
                  {property}
                </option>
              ))}
            </select>

            {selectedData !== "cover_photo" && (
              <label htmlFor='data'>
                <input
                  className='border-b-2 border-[gray] bg-[black] text-[white] placeholder:text-[0.7rem] px-[1rem]'
                  type='text'
                  id='id'
                  
                  placeholder='Data to edit'
                  value={dataValue}
                  onChange={(e) => setDataValue(e.target.value)}
                />
              </label>
            )}

            {selectedData === "cover_photo" && (
              <label htmlFor='data'>
                <input
                  className='border-b-2 border-[gray] bg-[black] text-[white] placeholder:text-[0.7rem] px-[1rem]'
                  type='file'
                  id='id'
                  name='cover_photo'
                  accept='image/*'
                  placeholder='Data to edit'
                />
              </label>
            )}

            <div className=' flex flex-col items-center gap-4 w-[60%] h-[12vh] justify-around mb-[0.5rem]'>
              <button type='submit' className='font-bold bg-[#34D399] w-[12rem] p-[0.5rem] rounded-[5px] text-[#FFF]'>Edit</button>
              <button type='button' onClick={handleClickDelete} className='font-bold bg-[#EE8380]  w-[12rem] p-[0.5rem] rounded-[5px] text-[#FFF]'>Delete</button>
            </div>
          </div>
        </form>
      </div>
      <div id='seccion derecha' className='hidden lg:block lg:w-[50%] lg:h-[90vh] lg:flex lg:justify-center lg:items-center'>
        <div className='w-[85%] h-[75%] flex flex-col items-center justify-evenly'>
          {selectedChapter && (
            <>
              <p className='text-[white]'>Chapter-{selectedChapter.title}</p>
              <img className='w-[55%] h-[55vh]' src={verfiedUrl(selectedChapter.cover_photo)} alt='' />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
