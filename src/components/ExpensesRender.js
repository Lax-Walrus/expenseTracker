import Card from "./UI/Card";
import ExpenseItem from "./ExpenseItem";

const ExpenseRender = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        date={props.data[0].date}
        title={props.data[0].title}
        amount={props.data[0].amount}
      />
      <ExpenseItem
        date={props.data[1].date}
        title={props.data[1].title}
        amount={props.data[1].amount}
      />
      <ExpenseItem
        date={props.data[2].date}
        title={props.data[2].title}
        amount={props.data[2].amount}
      />
      <ExpenseItem
        date={props.data[3].date}
        title={props.data[3].title}
        amount={props.data[3].amount}
      />
    </Card>
  );
};
export default ExpenseRender;
