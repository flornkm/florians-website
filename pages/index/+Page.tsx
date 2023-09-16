export default Page

import PageLayout from "../../layouts/PageLayout"
import { Counter } from "./Counter"

export const documentProps = {
  title: "Florian - Design Engineer",
}

function Page() {
  return (
    <PageLayout>
      <div>
        <h1>Welcome</h1>
        This page is:
        <ul>
          <li>Rendered to HTML.</li>
          <li>
            Interactive. <Counter />
          </li>
        </ul>
      </div>
    </PageLayout>
  )
}
