function EntityReference(properties) {
	properties = properties || {};

	this.ATTRIBUTE_NODE = properties.ATTRIBUTE_NODE || undefined;
	this.CDATA_SECTION_NODE = properties.CDATA_SECTION_NODE || undefined;
	this.COMMENT_NODE = properties.COMMENT_NODE || undefined;
	this.DOCUMENT_FRAGMENT_NODE = properties.DOCUMENT_FRAGMENT_NODE || undefined;
	this.DOCUMENT_NODE = properties.DOCUMENT_NODE || undefined;
	this.DOCUMENT_TYPE_NODE = properties.DOCUMENT_TYPE_NODE || undefined;
	this.ELEMENT_NODE = properties.ELEMENT_NODE || undefined;
	this.ENTITY_NODE = properties.ENTITY_NODE || undefined;
	this.ENTITY_REFERENCE_NODE = properties.ENTITY_REFERENCE_NODE || undefined;
	this.NOTATION_NODE = properties.NOTATION_NODE || undefined;
	this.PROCESSING_INSTRUCTION_NODE = properties.PROCESSING_INSTRUCTION_NODE || undefined;
	this.TEXT_NODE = properties.TEXT_NODE || undefined;
	this.apiName = 'Titanium.XML.EntityReference';
	this.attributes = properties.attributes || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.childNodes = properties.childNodes || undefined;
	this.firstChild = properties.firstChild || undefined;
	this.lastChild = properties.lastChild || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.localName = properties.localName || undefined;
	this.namespaceURI = properties.namespaceURI || undefined;
	this.nextSibling = properties.nextSibling || undefined;
	this.nodeName = properties.nodeName || undefined;
	this.nodeType = properties.nodeType || undefined;
	this.nodeValue = properties.nodeValue || undefined;
	this.ownerDocument = properties.ownerDocument || undefined;
	this.parentNode = properties.parentNode || undefined;
	this.prefix = properties.prefix || undefined;
	this.previousSibling = properties.previousSibling || undefined;
	this.text = properties.text || undefined;
	this.textContent = properties.textContent || undefined;

	return this;
}

EntityReference.prototype.addEventListener = function(){};

EntityReference.prototype.appendChild = function(){ return {}; };

EntityReference.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

EntityReference.prototype.cloneNode = function(){ return {}; };

EntityReference.prototype.fireEvent = function(){};

EntityReference.prototype.getApiName = function(){ return this.apiName; };

EntityReference.prototype.getAttributes = function(){ return this.attributes; };

EntityReference.prototype.getBubbleParent = function(){ return this.bubbleParent; };

EntityReference.prototype.getChildNodes = function(){ return this.childNodes; };

EntityReference.prototype.getFirstChild = function(){ return this.firstChild; };

EntityReference.prototype.getLastChild = function(){ return this.lastChild; };

EntityReference.prototype.getLifecycleContainer = function(){ return this.lifecycleContainer; };

EntityReference.prototype.getLocalName = function(){ return this.localName; };

EntityReference.prototype.getNamespaceURI = function(){ return this.namespaceURI; };

EntityReference.prototype.getNextSibling = function(){ return this.nextSibling; };

EntityReference.prototype.getNodeName = function(){ return this.nodeName; };

EntityReference.prototype.getNodeType = function(){ return this.nodeType; };

EntityReference.prototype.getNodeValue = function(){ return this.nodeValue; };

EntityReference.prototype.getOwnerDocument = function(){ return this.ownerDocument; };

EntityReference.prototype.getParentNode = function(){ return this.parentNode; };

EntityReference.prototype.getPrefix = function(){ return this.prefix; };

EntityReference.prototype.getPreviousSibling = function(){ return this.previousSibling; };

EntityReference.prototype.getText = function(){ return this.text; };

EntityReference.prototype.getTextContent = function(){ return this.textContent; };

EntityReference.prototype.hasAttributes = function(){ return true; };

EntityReference.prototype.hasChildNodes = function(){ return true; };

EntityReference.prototype.insertBefore = function(){ return {}; };

EntityReference.prototype.isSupported = function(){ return true; };

EntityReference.prototype.normalize = function(){};

EntityReference.prototype.removeChild = function(){ return {}; };

EntityReference.prototype.removeEventListener = function(){};

EntityReference.prototype.replaceChild = function(){ return {}; };

EntityReference.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

EntityReference.prototype.setLifecycleContainer = function(property){ this.lifecycleContainer = property; };

EntityReference.prototype.setLocalName = function(property){ this.localName = property; };

EntityReference.prototype.setNodeValue = function(property){ this.nodeValue = property; };

EntityReference.prototype.setPrefix = function(property){ this.prefix = property; };

module.exports = function(properties){ return new EntityReference(properties); };