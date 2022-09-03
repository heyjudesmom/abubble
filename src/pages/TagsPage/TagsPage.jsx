import './TagsPage.css';
import * as tagsAPI from '../../utilities/tags-api';
import TagsList from '../../components/TagsList/TagsList'
import NewTagForm from '../../components/NewTagForm/NewTagForm'
import { useEffect, useState } from 'react';

export default function TagsPage() {
  const [tags, setTags] = useState([]);

  useEffect(function () {
    async function getTags() {
      const tags = await tagsAPI.getAll();
      setTags(tags);
    }
    getTags();
  }, []);

  async function handleAddTag(tagFormData) {
    const tag = await tagsAPI.add(tagFormData)
    setTags([...tags, tag]);
  }


  return (
    <main>
      <h1>TagsPage</h1>
      <main className="flex-ctr-ctr">
        <TagsList tags={tags} />
        <NewTagForm handleAddTag={handleAddTag}/>
      </main>
    </main>
  );
  }