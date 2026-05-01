
function DateComponent() {

    const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


  return (
    <div className="tracking-wider text-gray-200">
        {date}
    </div>
  )
}

export default DateComponent