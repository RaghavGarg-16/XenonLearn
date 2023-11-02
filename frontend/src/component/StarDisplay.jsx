export default function StarDisplay({ rating , max_rating }) {
    let total  = Math.floor(rating)
    let arr = []
    for (let i =0 ; i<total ; i++){
        arr.push(<i key={rating+1+i} className="fa-solid fa-star"></i>)
    }
    if (rating-Math.floor(rating) > 0){
        arr.push(<i key={rating+10+5} className="fa-solid fa-star-half"></i>)
    }
    for ( let i= Math.ceil(rating) ; i<max_rating ; i++){
      arr.push(<i key={rating+100+i} className="fa-regular fa-star"></i>)

    }
  return (
    <div>
        <div>
            {arr}
        </div>
    </div>
  );
}
