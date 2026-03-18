import React from 'react';
import { DocumentContent, DocumentSection } from '../types';
import { FileText } from 'lucide-react';

interface DocumentPageProps {
  content: DocumentContent;
}

export const DocumentPage: React.FC<DocumentPageProps> = ({ content }) => {
  
  const renderImage = (image: { src: string; alt: string; caption?: string; width?: string }) => (
    <div className="my-4 text-center">
      <img 
        src={image.src} 
        alt={image.alt} 
        className={`max-w-full mx-auto rounded-lg shadow-md ${image.width || 'w-auto'}`} 
      />
      {image.caption && <p className="text-sm text-slate-500 mt-2 italic">{image.caption}</p>}
    </div>
  );

  const renderTable = (table: { headers: string[]; rows: string[][] }) => (
    <div className="my-4 overflow-x-auto rounded-lg border border-slate-200 shadow-sm">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50">
          <tr>
            {table.headers.map((header, idx) => (
              <th
                key={idx}
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-slate-200">
          {table.rows.map((row, rowIdx) => (
            <tr key={rowIdx}>
              {row.map((cell, cellIdx) => (
                <td key={cellIdx} className="px-4 py-3 whitespace-pre-wrap text-sm text-slate-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // Recursive component to render sections and sub-sections
  const SectionRenderer: React.FC<{ section: DocumentSection; level: number }> = ({ section, level }) => {
    // Determine heading tag and style based on depth level
    const HeadingTag = level === 0 ? 'h3' : level === 1 ? 'h4' : 'h5';
    const headingClass = level === 0 
      ? "text-xl md:text-2xl font-bold text-slate-700 mb-4 border-l-4 border-blue-500 pl-3 mt-8 first:mt-0"
      : level === 1
      ? "text-lg md:text-xl font-semibold text-slate-700 mb-3 mt-6"
      : "text-base md:text-lg font-medium text-slate-700 mb-2 mt-4";

    return (
      <div className="mb-4">
        {section.heading && <HeadingTag className={headingClass}>{section.heading}</HeadingTag>}
        
        {section.image && renderImage(section.image)}
        
        {section.paragraphs && (
          <div className="space-y-3 text-base text-slate-700 leading-relaxed md:leading-loose mb-4 pl-1">
            {section.paragraphs.map((para, paraIndex) => (
              <p key={paraIndex} dangerouslySetInnerHTML={{ __html: para }}></p>
            ))}
          </div>
        )}
        
        {section.listItems && (
          <ul className="list-disc list-inside text-base text-slate-700 space-y-2 mb-4 pl-2 md:pl-4 bg-slate-50/50 p-2 rounded-lg">
            {section.listItems.map((item, itemIndex) => (
              <li key={itemIndex} className="leading-relaxed">{item}</li>
            ))}
          </ul>
        )}

        {section.table && renderTable(section.table)}

        {/* Recursive call for sub-sections */}
        {section.subSections && section.subSections.length > 0 && (
          <div className={`pl-0 ${level === 0 ? 'md:pl-2' : 'md:pl-4'}`}>
            {section.subSections.map((subSection, index) => (
              <SectionRenderer key={index} section={subSection} level={level + 1} />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-4 md:p-8 animate-fade-in bg-white shadow-lg rounded-xl min-h-full">
      {content.image && (
        <div className="w-full h-48 md:h-72 mb-8 rounded-lg overflow-hidden relative shadow-md">
          <img 
            src={content.image.src} 
            alt={content.image.alt} 
            className="w-full h-full object-cover filter brightness-90" 
            onError={(e) => {
              // Fallback if image fails to load
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white text-shadow-lg">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-2 leading-tight">{content.title}</h2>
            {content.subtitle && <p className="text-base md:text-xl font-medium opacity-90">{content.subtitle}</p>}
          </div>
        </div>
      )}

      {!content.image && (
        <div className="flex items-start mb-8 border-b pb-6 border-slate-100">
          <div className="p-3 bg-blue-50 rounded-lg mr-4 text-blue-600">
            <FileText size={32} />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-tight">{content.title}</h2>
            {content.subtitle && <p className="text-base md:text-lg text-slate-500 mt-2 font-medium">{content.subtitle}</p>}
          </div>
        </div>
      )}

      <div className="max-w-4xl">
        {content.sections.map((section, sectionIndex) => (
          <SectionRenderer key={sectionIndex} section={section} level={0} />
        ))}
      </div>
    </div>
  );
};