import React, { useState, useEffect } from 'react';
import './App.css';
import ListContainer from './components/ListContainer';
import LoadingView from './components/LoadingView';
import FailureView from './components/FailureView';

function App() {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedLists, setSelectedLists] = useState([]);
  const [showCreateView, setShowCreateView] = useState(false);

  
  const list1Items = [
    { name: "Cat, european wild", scientific: "Felis silvestris lybica" },
    { name: "Whale, killer", scientific: "Orcinus orca" },
    { name: "White-cheeked pintail", scientific: "Anas bahamensis" },
    { name: "Yellow-crowned night heron", scientific: "Nyctanassa violacea" },
    { name: "Gemsbok", scientific: "Oryx gazella" },
    { name: "North American porcupine", scientific: "Erethizon dorsatum" },
    { name: "Red fox", scientific: "Vulpes vulpes" },
    { name: "Bengal tiger", scientific: "Panthera tigris tigris" },
    { name: "Arctic wolf", scientific: "Canis lupus arctos" },
    { name: "Brown bear", scientific: "Ursus arctos" },
    { name: "Mountain gorilla", scientific: "Gorilla beringei beringei" },
    { name: "Snow leopard", scientific: "Panthera uncia" },
    { name: "Red panda", scientific: "Ailurus fulgens" },
    { name: "Giant panda", scientific: "Ailuropoda melanoleuca" },
    { name: "Cheetah", scientific: "Acinonyx jubatus" },
    { name: "African elephant", scientific: "Loxodonta africana" },
    { name: "Black rhinoceros", scientific: "Diceros bicornis" },
    { name: "Hippopotamus", scientific: "Hippopotamus amphibius" },
    { name: "Giraffe", scientific: "Giraffa camelopardalis" },
    { name: "Zebra, plains", scientific: "Equus quagga" },
    { name: "Lion", scientific: "Panthera leo" },
    { name: "Jaguar", scientific: "Panthera onca" },
    { name: "Polar bear", scientific: "Ursus maritimus" },
    { name: "Gray wolf", scientific: "Canis lupus" },
    { name: "American bison", scientific: "Bison bison" }
  ];

  const list2Items = [
    { name: "Flicker, campo", scientific: "Colaptes campestroides" },
    { name: "Porcupine, north american", scientific: "Erethizon dorsatum" },
    { name: "African lion", scientific: "Panthera leo" },
    { name: "Black-throated butcher bird", scientific: "Cracticus nigroagularis" },
    { name: "Coyote", scientific: "Canis latrans" },
    { name: "Magpie, black-backed", scientific: "Gymnorhina tibicen" },
    { name: "Bald eagle", scientific: "Haliaeetus leucocephalus" },
    { name: "Great horned owl", scientific: "Bubo virginianus" },
    { name: "Peregrine falcon", scientific: "Falco peregrinus" },
    { name: "Golden eagle", scientific: "Aquila chrysaetos" },
    { name: "California condor", scientific: "Gymnogyps californianus" },
    { name: "Whooping crane", scientific: "Grus americana" },
    { name: "Blue jay", scientific: "Cyanocitta cristata" },
    { name: "Northern cardinal", scientific: "Cardinalis cardinalis" },
    { name: "American robin", scientific: "Turdus migratorius" },
    { name: "Red-tailed hawk", scientific: "Buteo jamaicensis" },
    { name: "Barn owl", scientific: "Tyto alba" },
    { name: "Snowy owl", scientific: "Bubo scandiacus" },
    { name: "American kestrel", scientific: "Falco sparverius" },
    { name: "Osprey", scientific: "Pandion haliaetus" },
    { name: "Turkey vulture", scientific: "Cathartes aura" },
    { name: "Red-winged blackbird", scientific: "Agelaius phoeniceus" },
    { name: "Common raven", scientific: "Corvus corax" },
    { name: "American crow", scientific: "Corvus brachyrhynchos" },
    { name: "Black-capped chickadee", scientific: "Poecile atricapillus" }
  ];

 
  const fetchLists = () => {
    setTimeout(() => {
      setError(true); 
    }, 2000);
  };

  useEffect(() => {
    setTimeout(() => {
      setLists([
        { name: "List 1", list_items: list1Items },
        { name: "List 2", list_items: list2Items }
      ]);
      setLoading(false);
    }, 2000);
  }, []);



  const handleListSelect = (listId) => {
    if (selectedLists.length === 2 && !selectedLists.includes(listId)) {
      alert('You can only select 2 lists at a time');
      return;
    }
    setSelectedLists(prev => {
      if (prev.includes(listId)) {
        return prev.filter(id => id !== listId);
      }
      return [...prev, listId];
    });
  };
  const handleCreateNewList = () => {
    if (selectedLists.length !== 2) {
      alert('You should select exactly 2 lists to create a new list');
      return;
    }
    setShowCreateView(true);
  };

  if (loading) return <LoadingView />;
  if (error) return <FailureView onRetry={fetchLists} />;

  return (
    <div className="app-container">
      <h1>List Creation</h1>
      {!showCreateView && (
        <button
          className="create-list-button"
          onClick={handleCreateNewList}
        >
          Create a new list
        </button>
      )}


      <div className="lists-container">
        {lists.map((list, index) => (
          <ListContainer
            key={index}
            listId={list.name}
            name={list.name}
            items={list.list_items}
            selected={selectedLists.includes(list.name)}
            onSelect={() => handleListSelect(list.name)}
            showCreateView={showCreateView}
          />
        ))}
      </div>
      {error && <div className="error-message">Failed to load lists. Please try again.</div>}
    </div>
  );
}

export default App;
