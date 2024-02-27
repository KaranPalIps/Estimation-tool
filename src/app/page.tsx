import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Header from "@/components/ui/header";

export default function Home() {
  return (
    <div>
      <Header header="Dashboard"/>
      <div className="flex">
        <div className="m-10">
          <Card>
            <CardHeader>
              <h3>Total Number of Documents</h3>
            </CardHeader>
            <CardContent>
              500
            </CardContent>
          </Card>
        </div>
        <div className="m-10">
          <Card>
            <CardHeader>
              <h2>List of File Accourdance to Technology</h2>
            </CardHeader>
            <CardContent>
              React: 10 |
              Node: 10 |
              Wordpress: 10
            </CardContent>
          </Card>
        </div>
      </div>
    </div>

  );
}
