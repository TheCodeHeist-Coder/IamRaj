
function DateComponent() {

    const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


  return (
    <div className="tracking-wider theme-text-secondary">
        {date}
    </div>
  )
}

export default DateComponent