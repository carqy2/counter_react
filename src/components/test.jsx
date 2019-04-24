var DisplayRow = React.createClass({
    getDefaultProps: function(){
        return {
            columns: []
        };

    },
    render: function(){
        var rows = this.props.columns.map(function (item, i){
            var entry = item.map(function (element, j) {
                return ( 
                    <td key={j}> {element} </td>
                    );
            });
            return (
                <tr key={i}> {entry} </tr>
             );
        });
        return (
            <table className="table-hover table-striped table-bordered">
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
});