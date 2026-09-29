import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

function BarChartComponent() {

    const data = [
        {
            course: "React",
            students: 40
        },
        {
            course: "JavaScript",
            students: 60
        },
        {
            course: "Python",
            students: 50
        },
        {
            course: "Java",
            students: 35
        }
    ];

    return (
        <div style={{ width: "100%", height: 400 }}>

            <ResponsiveContainer>
                <BarChart data={data}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="course" />

                    <YAxis />

                    <Tooltip />

                    <Legend />

                    <Bar
                        dataKey="students"
                        name="Students"
                    />

                </BarChart>
            </ResponsiveContainer>

        </div>
    );
}

export default BarChartComponent;