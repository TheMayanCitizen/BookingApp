import { Fragment } from "react/jsx-runtime"
import { Hotel } from "../../store/slices/types/hotels.types"
import { useState } from "react"

interface Props {
    response : Hotel
}

export const SliderImages = ({response}:Props) => {
    const [imgSelected, setImgSelected] = useState(0)

    const objStyle = {
        transform: `translateX(calc((-${imgSelected}/${response?.images.length})*100%))`,
        width: `${response?.images.length * 100}%`
    }

    const handleNextImg = () => {
        const lengthImgs = response?.images.length -1
        setImgSelected(state => (state + 1 <= lengthImgs ) ? state +1 : state)
    }


    const hadlePrevImg = () => {
        if(imgSelected - 1 >= 0){
            setImgSelected(imgSelected -1)
        }
    }
  return (
    <Fragment>
        <div className="w-full mx-auto  flex justify-center">
            <div className='slider'>
                <button onClick={hadlePrevImg} className='slider_btn'>&lt;</button>
                <div className='slider_interior'>
                    <div className='slider_movable' style={objStyle}>
                        {
                            response?.images.map(imgInfo => (
                                <div  className='slider_img_container' key={imgInfo.id}>
                                    <img className='slider_img' src={imgInfo.url} alt="" />
                                </div>

                            ) )
                        }
                    </div>

                </div>
                <button onClick={handleNextImg} className='slider_btn slider_btn_next'>&gt;</button>
            </div>
        </div>
    </Fragment>
  )
}