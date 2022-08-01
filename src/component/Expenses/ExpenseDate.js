import "./ExpenseDate.css";
function ExpenseDate(props) {
  /**
   *
   * Kode ini berguna untuk mengambil data props yang diambil dari App.js
   * kita mengubah object yang kita terima dan bagi menjadi bagian-bagian yang lebih kecil seperti day,month,name dll
   * lalu kita passing datanya ke dalam div yang ada di dalam return
   *
   *
   */
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("id-ID", { month: "long" });
  const day = props.date.toLocaleString("id-ID", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
