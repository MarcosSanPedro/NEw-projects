export function Events({image,tittle, description, badges}){

    return(
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {tittle}
    </h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
        {
        badges.map((element, index)=> (
        <div className="badge badge-outline" key={index}>{element}</div>
        )
        )}
      
  
    </div>
  </div>
</div>
    )
}