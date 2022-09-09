import './TagsPage.css';
import TagsList from '../../components/TagsList/TagsList'
import NewTagForm from '../../components/NewTagForm/NewTagForm'
export default function TagsPage({tags, handleAddTag, handleDelete, setTags}) {
  
  return (
    <main>
      <h1>TagsPage</h1>
      <main className="flex-ctr-ctr">
        <TagsList tags={tags} handleDelete={handleDelete} />
        <NewTagForm handleAddTag={handleAddTag}  />
      </main>
    </main>
  );
  }