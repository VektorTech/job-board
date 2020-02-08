import {
    ViewJobContainer,
    CompLogo,
    CompHeading,
    CompDetails,
    CompTagsArea,
    JobDescr,
    Submit,
    HeadTag,
    Column,
    Nav, CompLogoImg,
    SearchTag, Ratings,
    SaveButton
} from './ViewJob.style';

const details = {
    "SALARY": "", "START DATE": "", "LOCATION": "Los Angeles"
}

const ViewJob = () => (
    <ViewJobContainer>
        <CompLogo>
            <CompLogoImg src="/"/>
            <Ratings>4.9</Ratings>
        </CompLogo>
        <CompHeading>
            <HeadTag lg>Product Store Manager for Apple in Los Angeles</HeadTag>
            <HeadTag>Apple Inc</HeadTag>
            <h2><a href="/">{"<<WEBSITE>>"}</a></h2>
            <Submit>Apply Now</Submit>
            <SaveButton> {"<3"} Save</SaveButton>
        </CompHeading>
        <CompDetails>
            { Object.keys(details).map( key => (
                <Column>
                <HeadTag>{key}</HeadTag>
                <Nav>
                    <li>{details[key]}</li>
                </Nav>
                </Column>
            ))}
        </CompDetails>
        <CompTagsArea>
            <SearchTag>Accounting</SearchTag>
            <SearchTag>Accounting</SearchTag>
            <SearchTag>Accounting</SearchTag>
            <SearchTag>Accounting</SearchTag>
            <SearchTag>Accounting</SearchTag>
            <SearchTag>Accounting</SearchTag>
        </CompTagsArea>
        <JobDescr>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolorum quisquam totam quae. Magnam quisquam ex distinctio in, incidunt quibusdam error architecto ducimus enim voluptates! Inventore voluptatibus totam magni vero?
            Obcaecati nobis culpa distinctio optio facilis voluptatem voluptate possimus asperiores aspernatur facere quisquam dolores perferendis sint ipsum, alias, amet atque in perspiciatis? Amet ad similique laudantium necessitatibus quod aspernatur cupiditate.
            Ratione culpa, illo corrupti blanditiis, ab harum nemo maxime vel dicta consectetur tempora excepturi tempore nam! Quos magnam earum laboriosam omnis, praesentium ab, recusandae cum incidunt saepe ex obcaecati temporibus?
            Accusamus optio velit dignissimos quos ab officiis alias ipsum commodi saepe, officia ad pariatur libero magnam quod molestias maiores. Alias autem itaque vero facere aspernatur nesciunt quas qui architecto debitis.
            Sed, modi iste. Magni natus velit ullam praesentium voluptatum commodi libero consequatur fuga sint, nobis incidunt doloribus eos dignissimos dolor, pariatur voluptatem totam magnam. Hic dicta quaerat obcaecati voluptatibus dolor.
            Molestias architecto sit aliquid mollitia dignissimos! Ut, soluta ea ipsam animi consequatur temporibus perferendis quam id perspiciatis, aperiam, minus voluptate. Ducimus dignissimos laborum aliquam alias beatae rerum tempora aliquid unde.
            Aspernatur, natus nihil deleniti, beatae ex laborum velit fugiat cum ullam iste tenetur. Pariatur laborum adipisci, quo animi similique aliquid tempora odio id. Et, nemo saepe inventore vitae distinctio deleniti!
            Dicta, error! At soluta, voluptates deserunt rem voluptatibus exercitationem saepe. Provident odit eius architecto quibusdam quod nisi et eos magnam blanditiis qui laudantium veniam, voluptate praesentium obcaecati ipsum nam nesciunt.
            Magni, sint deleniti. Neque voluptates quasi nobis consequuntur atque sed molestiae dolores culpa, vero placeat assumenda, dolore reiciendis blanditiis sequi cumque autem sint qui recusandae animi repudiandae dolorum obcaecati eos?
            Officia autem cumque, culpa repellat fuga inventore voluptatibus officiis deserunt impedit placeat accusantium, veniam itaque. Voluptatibus sint, maiores placeat sapiente, fugit rerum sunt laboriosam, repudiandae aspernatur odit doloremque dolore reprehenderit.
        </JobDescr>
    </ViewJobContainer>
);

export default ViewJob;